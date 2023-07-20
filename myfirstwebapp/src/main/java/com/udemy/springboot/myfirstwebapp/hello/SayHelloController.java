package com.udemy.springboot.myfirstwebapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SayHelloController {

    @RequestMapping("/say-hello")
    @ResponseBody
    public String sayHello() {
        return "Hello! What are yo learning today ?";
    }

    @RequestMapping("/say-hello-html")
    @ResponseBody
    public String sayHelloHtml() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("<!DOCTYPE html>");
        stringBuffer.append("<html lang=\"en\">");
        stringBuffer.append("<head>");
        stringBuffer.append("<meta charset=\"UTF-8\">");
        stringBuffer.append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        stringBuffer.append("<title>My First HTML file</title>");
        stringBuffer.append("</head>");
        stringBuffer.append("<body>");
        stringBuffer.append(" My first html page with body");
        stringBuffer.append("</body>");
        stringBuffer.append("</html>");
        return stringBuffer.toString();
    }

    //sayHello.jsp

    @RequestMapping("/say-hello-jsp")
    public String sayHelloJsp() {
        return "sayHello";
    }
}
