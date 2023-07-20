package com.udemy.learnspringframework.game;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan("com.udemy.learnspringframework.game")
public class GammingAppLauncherApplication {

    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(GammingAppLauncherApplication.class);
        context.getBean(GamingConsole.class).up();
        context.getBean(GameRunner.class).run();
    }
}
