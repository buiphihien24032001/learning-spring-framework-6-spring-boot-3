package com.udemy.springboot.myfirstwebapp.ApplicationEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class DataModificationListener implements ApplicationListener<DataModifiedEvent> {


    @Autowired
    private DataSqlExporter dataSqlExporter;
    @Override
    public void onApplicationEvent(DataModifiedEvent event) {
        dataSqlExporter.exportDataToFile();
    }
}
