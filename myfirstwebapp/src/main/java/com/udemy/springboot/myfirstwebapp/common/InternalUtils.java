package com.udemy.springboot.myfirstwebapp.common;

import org.springframework.stereotype.Component;

@Component
public class InternalUtils {

    public static final String COMMA = ",";
    public static final String SINGLE_MARK = "'";
    public static final String BRACKET_LEFT = "(";
    public static final String BRACKET_RIGHT = ")";
    public static final String SEMICOLON = ";";
    public static final String TABLE_NAME = "todo_hien";
    public static final String PREFIX_INSERT_QUERY = "INSERT INTO " + TABLE_NAME + " (USERNAME, DESCRIPTION, TARGET_DATE,IS_DONE)";
}
