<?

$base_url = NULL;
$uri      = NULL;
$uri_string = NULL;
$i = 0;

foreach($_GET as $param => $val) {
  if($param == 'url') {
    $base_url = $val;
    continue;
  }
  if($val == 'quotes') {
    $val = "\"\""; 
  }
  $uri[$param] = $val;
  $i++;
}
$x = 0;
$uri = array_reverse($uri);
foreach($uri as $param => $val) {
  if($x == 0) {
    $uri_string .= "?$param=$val";  
  } else {
    $uri_string .= "&$param=$val";  
  }
  $x++;
}
  
$ch = curl_init();

curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_URL, $base_url.$uri_string);

print curl_exec($ch);
?>
