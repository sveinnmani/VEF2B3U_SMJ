$(document).ready(function(){
				$("#question2").hide();
				$("#restart").hide();
				
				$(".button").on('click', function(){
					var spurning1 = $("#question1");
					var spurning2 = $("#question2");
					var restart = $("#restart");

					spurning1.fadeOut(400, function(){
						spurning2.fadeIn(400, function(){							
							$(".button").on('click', function(){
								spurning2.fadeOut(400);																	
									
							});														
						});
					});
				});				
			});	