var prix_match = 25
var prix_train = 50
var prix_musée = 15
var prix_avion = 180
var quantité_match = $('#quantité1').val()
var quantité_train = $('#quantité2').val()
var quantité_musée = $('#quantité3').val()
var quantité_avion = $('#quantité4').val()

if (quantité_match>0) {match()} 
if (quantité_train>0) {train()} 
if (quantité_musée>0) {musée()} 
if (quantité_avion>0) {avion()} 

function match(){var prix_total1=quantité_match*prix_match; 
$('#prix1').append(prix_total1)}

function train(){var prix_total2=quantité_train*prix_train; 
$('#prix2').append(prix_total2)}

function musée(){var prix_total3=quantité_musée*prix_musée;
$('#prix3').append(prix_total3)}

function avion(){var prix_total4=quantité_avion*prix_avion;
$('#prix4').append(prix_total4)}

function net_a_payer(){prix_total1+prix_total2+prix_total3+prix_total4}