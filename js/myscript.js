$(document).ready(function(){

	function animateBars() {
		var subjects = {'Linux': 70, 'Git': 50, 'Sistemas': 70, 'Bash': 60, 'Java': 75, 'Python': 70,
						'JavaScript': 70, 'HTML/CSS': 75, 'Redes': 60,
						'SQL': 75, 'MDX': 70, 'XPath/XQuery': 75, 'ETL': 65,
						'R': 70, 'Matlab': 60, 'Análisis de datos': 65};
    	$('.bars').each(function(i, elem){
    		var width = 1;
    		var id = setInterval(frame, 5);
    		function frame() {
        	 	if (width >= subjects[elem.firstChild.textContent]) {
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
