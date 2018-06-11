$(document).ready(function(){

	function animateBars() {
		var subjects = {'Git': 65, 'Linux': 80, 'Sistemas': 70, 'Bash': 70, 'Java': 80, 'Python': 85,
						'JavaScript': 70, 'HTML/CSS': 75, 'Redes': 70,
						'SQL': 80, 'MDX': 75, 'XPath/XQuery': 75, 'Integración de datos': 70,
						'R': 75, 'Matlab': 70, 'Minería de datos': 65};
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
