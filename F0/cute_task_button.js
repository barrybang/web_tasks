
function showButton()
			    {
			    	var showButton=document.getElementById("password");
			    	if (showButton.type=="password") 
			    	{
			    		showButton.type="text";
			    	}
			    	else
			        {
			        	showButton.type="password";
			        }
			    }