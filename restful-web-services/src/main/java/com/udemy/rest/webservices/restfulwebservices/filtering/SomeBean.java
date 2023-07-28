package com.udemy.rest.webservices.restfulwebservices.filtering;


import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
//@JsonIgnoreProperties("field2")
@JsonFilter("SomeBeanFilter")
public class SomeBean {
//    @JsonIgnore
    private String field1;
    private String field2;
    private String field3;
}
