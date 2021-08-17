package com.github.ludmylla.roomapi.exceptions;

import lombok.Getter;

import java.util.Date;

@Getter
public class ErroDetails {

    private Date timeStamp;
    private String message;
    private String details;

    public ErroDetails(Date timeStamp, String message, String details) {
        super();
        this.timeStamp = timeStamp;
        this.message = message;
        this.details = details;
    }

}
