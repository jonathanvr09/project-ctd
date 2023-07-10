package com.dh.store.carRent.exception;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageReturn {
    private String errror;
}
