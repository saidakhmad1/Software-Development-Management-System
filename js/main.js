/*
//////////////////////////////////////////////////////////////////////////////////////////
//										                                            	
// Project:	SOFTWARE DEVELOPMENT MANAGEMENT SYSTEM [SDMS]                                
//		                                                                                
// File: main.js            							                                    
//											                                            
// Version: 1.0										                                    
//										                                            	
// Description:                                                                        	
//											                                           
//		   Easy software project management applicaiton.                                
//		   Will be implemented on php - laravel                                 							                
//											                                           
//											                                            
//											                                            
//											                                            
// Author: Ami Bappy [amibappy77@gmail.com]						                       
//                                                                                     
// Github: https://github.com/amibappy                                                 
//                                                                                     
//        										                                       
//  .______       .___      .______   .______   ____.  .____ 				           
//  |   _  \      /   \     |   _  \  |   _  \  \   \  /   / 				           
//  |  |_)  |    /  ^  \    |  |_)  | |  |_)  |  \   \/   /  				            
//  |   _  <    /  /_\  \   |   ___/  |   ___/    \_    _/   				            
//  |  |_)  |  /  _____  \  |  |      |  |          |  |     				            
//  |______/  /__/     \__\ | _|      | _|          |__|     				           
//                                                       				                
//											                                           
//////////////////////////////////////////////////////////////////////////////////////////
//											                                           
// Copyright (c) 2017 Bappy [amibappy77@gmail.com]					                    
// All Rights Reserved.									                                
//											                                            
//////////////////////////////////////////////////////////////////////////////////////////
//											                                            
// Unauthorized copying of this file, via any medium is strictly prohibited	           
// Proprietary and confidential								                           
//											                                           
//////////////////////////////////////////////////////////////////////////////////////////
//											                                            
// DO NOT REMOVE THIS AREA                                                             
//                                                                                     
////////////////////////////////////////////////////////////////////////////////////////// 
*/





// menu-toggle

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});



// Back to top

var amountScrolled = 333;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});



// Progress bar

$(".progress-bar").loading();
$('input').on('click', function () {
    $(".progress-bar").loading();
});

