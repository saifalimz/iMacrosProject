// GRE SCRIPT by SaifAliMZ
var macro; 
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n";
macro +=  "SET !ERRORCONTINUNE YES" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n";
macro +=  "TAG POS={{i}} TYPE=H3 ATTR=CLASS:\"r\" EXTRACT=HTM" + "\n";
macro +=  "SET !EXTRACT EVAL(\"'{{!EXTRACT}}'.match(/a href=\\\"(.*)\\\" onmousedown=/)[1];\")" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=* FILE=links.csv" + "\n";
macro +=  "'TAG POS=1 TYPE=SPAN ATTR=TXT:Next" + "\n";
macro +=  "'WAIT SECONDS = 2" + "\n";
for (var i=1;i<=100;i++)
{

iimSet("i",i)
iimPlay(macro)
}
