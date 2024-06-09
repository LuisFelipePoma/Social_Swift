package com.socialswift.api.config;


import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.socialswift.api.exception.BadRequestException;
import com.socialswift.api.exception.ResourceDuplicateException;
import com.socialswift.api.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@RestControllerAdvice
@AllArgsConstructor
public class RestExceptionHandler {

    private MessageSource messageSource;

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST,
            "The request was not valid. Please fix the errors and try again.");

        Set<String> errors = new HashSet<>();
        List<FieldError> fieldErrors = exception.getFieldErrors();

        for (FieldError fe : fieldErrors) {
            String message = messageSource.getMessage(fe, Locale.getDefault());
            errors.add(message);
        }
        problemDetail.setProperty("errors", errors);

        return problemDetail;
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFoundException(ResourceNotFoundException exception){
        String message = "Resource not found.";

        if (!exception.getMessage().isBlank()) message = exception.getMessage();

        return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, message);
    }

    @ExceptionHandler(BadRequestException.class)
    public ProblemDetail handleBadRequestException(BadRequestException exception){
        String message = "The request was not valid.";

        if (!exception.getMessage().isBlank()) message = exception.getMessage();

        return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, message);
    }

    @ExceptionHandler(ResourceDuplicateException.class)
    public ProblemDetail handleResourceDuplicateException(ResourceDuplicateException exception){
        String message = "Resource already exists.";

        if (!exception.getMessage().isBlank()) message = exception.getMessage();

        return ProblemDetail.forStatusAndDetail(HttpStatus.CONFLICT, message);
    }
}
