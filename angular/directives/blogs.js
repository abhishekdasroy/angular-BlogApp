
myApp.directive("postCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/post-card.html",

		controller  : function($scope){

			console.log("directive scope");
			console.log($scope.blog);
			
			

		}// end controller


	}




});// end post preview card directive

myApp.directive("customHeading",function(){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/custom-card.html",
		scope : {},
		controller  : function($scope){

			$scope.cardHeading = 'This is card '+index++;
			//index++;	
			
			

		}// end controller


	}




});// end post preview card directive


myApp.directive("myCard",function(){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/post-card.html",
		scope  		: {

			//this is an attribute that i am expecting
			blog: "=",
			url : "="

		}, //  I am initialiazing scope to be empty
		controller  : function($scope){
			//console.log("I have my own scope");
			//console.log($scope.blog);
			$scope.cardHeading = 'This is card '+index++;
			//console.log($scope.cardHeading);
			console.log($scope.url);
			
			

		}// end controller 
		

	}




});// end post preview card directive

myApp.directive("specialCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/post-card.html",
		controller  : function($scope){			
				

		},// end controller 
		link  : function(scope,element,attrs){
			
			console.log("link function called")
			element.on("mouseover",function(){
				
				//console.log("mouseover called");
				//element.css("background-color", "yellow");

			});
			console.log(attrs); // atts is used to access directive attributes
			
		}

	}




});// end post preview card directive