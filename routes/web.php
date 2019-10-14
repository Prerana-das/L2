<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::post('/app/add_product', "ProductController@storeProduct");
Route::get('/app/all_product', "ProductController@all_product");
Route::get('/app/product/{id}', "ProductController@show_product");

Route::post('/app/delete_product', "ProductController@delete_Product");

Route::any('{slug}', 'HomeController@home')->where('slug', '([A-z\d-\/_.]+)?');
