var $ = require('jquery');

$(document).ready(function(){

	function animateBars() {
		var subjects = {'Git': 70, 'Linux': 80, 'Sistemas': 70, 'Bash': 70, 'Java': 80, 'Python': 85,
						'JavaScript': 70, 'HTML': 75, 'CSS': 60, 'Redes': 60,
						'SQL': 80, 'MDX': 65, 'XPath/XQuery': 65, 'Integración de datos': 65};
    	$('.myBars').each(function(i, elem){
    		var width = 1;
    		var id = setInterval(frame, 10);
    		function frame() {
        	 	if (width >= subjects[elem.textContent]) {
            		clearInterval(id);
        		} else {
            		width++;
            		elem.style.width = width + '%';
        		}
    		}
    	});
	}
	animateBars();
});
