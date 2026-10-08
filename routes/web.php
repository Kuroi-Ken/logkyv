<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('landing');
});
Route::get('/game', function () {
    return view('game');
});
Route::get('/menu', function () {
    return view('menu');
});
Route::get('/materi', function () {
    return view('materi');
});
Route::get('/quiz', function () {
    return view('quiz');
});
Route::get('/maze', function () {
    return view('maze');
});
Route::get('/training', function () {
    return view('training');
});