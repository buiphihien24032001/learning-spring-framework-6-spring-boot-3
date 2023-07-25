package com.udemy.springboot.myfirstwebapp.ApplicationEvent;

import org.springframework.context.ApplicationEvent;

public class DataModifiedEvent extends ApplicationEvent {
    public DataModifiedEvent(Object source) {
        super(source);
    }
}
