<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('index');
});


Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*');
