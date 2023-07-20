package com.udemy.learnspringframework.game;

import org.springframework.stereotype.Component;

@Component
public class PacManGame implements GamingConsole{

    public void up(){
        System.out.println("up");
    }

    public void down(){
        System.out.println("Down");
    }

    public void left(){
        System.out.println("left");
    }

    public void right(){
        System.out.println("right");
    }
}
