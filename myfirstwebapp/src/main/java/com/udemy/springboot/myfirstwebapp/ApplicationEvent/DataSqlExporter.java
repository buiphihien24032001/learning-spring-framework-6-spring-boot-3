package com.udemy.springboot.myfirstwebapp.ApplicationEvent;

import com.udemy.springboot.myfirstwebapp.common.InternalUtils;
import com.udemy.springboot.myfirstwebapp.todo.Todo;
import com.udemy.springboot.myfirstwebapp.todo.TodoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;


@Component
public class DataSqlExporter {

    private static final Logger logger = LoggerFactory.getLogger(DataSqlExporter.class);
    @Autowired
    private TodoRepository todoRepository;


    private List<String> fetchData() {
        List<String> insertQueries = new ArrayList<>();
        List<Todo> todos = todoRepository.findAll();
        for (Todo record : todos) {
            String username = record.getUsername();
            String description = record.getDescription();
            String targetDate = String.valueOf(record.getTargetDate());
            String isDone = String.valueOf(record.getIsDone());
            String insertQuery =
                    InternalUtils.PREFIX_INSERT_QUERY + " VALUES " + InternalUtils.BRACKET_LEFT + InternalUtils.SINGLE_MARK + username
                    + InternalUtils.SINGLE_MARK + InternalUtils.COMMA + InternalUtils.SINGLE_MARK + description + InternalUtils.SINGLE_MARK
                            + InternalUtils.COMMA + InternalUtils.SINGLE_MARK + targetDate + InternalUtils.SINGLE_MARK
                            + InternalUtils.COMMA + isDone + InternalUtils.BRACKET_RIGHT + InternalUtils.SEMICOLON;
            insertQueries.add(insertQuery);
            logger.info("Query: {}", insertQuery);
        }
        return insertQueries;
    }

    // Method to generate and write INSERT queries to the data.sql file in the resource folder
    public void exportDataToFile() {
        try {
            List<String> data = fetchData();
            // Get the URL for data.sql in target directory (created during build)
            ClassLoader classLoader = getClass().getClassLoader();
            URL resourceUrl = classLoader.getResource("data.sql");

            if (resourceUrl == null) {
                throw new FileNotFoundException("data.sql file not found.");
            }
            //clear data file
            clearDataFile(resourceUrl);
            // Update the data.sql file in target directory
            File targetDataFile = new File(resourceUrl.getFile());
            try (PrintWriter writer = new PrintWriter(new FileWriter(targetDataFile, true))) {
                for (String query : data) {
                    writer.println(query);
                }
            }

//            // Create a temporary file in the target directory and write the new data to it
//            File tempDataFile = File.createTempFile("temp_data", ".sql");
//            try (PrintWriter writer = new PrintWriter(new FileWriter(tempDataFile))) {
//                for (String query : data) {
//                    writer.println(query);
//                }
//            }
//
//            // Copy the temporary file to the src/main/resources directory
//            File srcDataFile = new File("src/main/resources/data.sql");
//            Files.copy(tempDataFile.toPath(), srcDataFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
//
//            // Delete the temporary file
//            tempDataFile.delete();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void clearDataFile(URL resourceUrl) {
        try {
            File dataFile = new File(resourceUrl.getFile());
            PrintWriter writer = new PrintWriter(dataFile);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
