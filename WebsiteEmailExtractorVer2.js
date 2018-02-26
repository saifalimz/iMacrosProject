var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=8011895" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro +=  "URL GOTO=#WEBSITEHERE#" + "\n";
/*macro +=  "TAG POS={{i}} TYPE=SPAN ATTR=TXT:Website" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:text<SP>weblinks EXTRACT=TXT" + "\n";
macro +=  "TAB T=2" + "\n";*/
macro +=  "URL GOTO={{!EXTRACT}}" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=HTML ATTR=TXT:*" + "\n";
macro +=  "" + "\n";
macro +=  "EVENT TYPE=KEYPRESS SELECTOR=\"HTML\" CHAR=\"a\" MODIFIERS=\"ctrl\"" + "\n";
macro +=  "EVENT TYPE=KEYPRESS SELECTOR=\"HTML\" CHAR=\"c\" MODIFIERS=\"ctrl\"" + "\n";
macro +=  "" + "\n";
macro +=  "TAB OPEN" + "\n";
macro +=  "TAB T=2" + "\n";
macro +=  "URL GOTO=http://www.lite14.us/" + "\n";
macro +=  "'URL GOTO=http://eel.surf7.net.my/" + "\n";
macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=NAME:extractor ATTR=NAME:rawdata CONTENT={{!CLIPBOARD}}" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=INPUT:BUTTON FORM=NAME:extractor ATTR=*" + "\n";
macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=NAME:extractor ATTR=NAME:rawdata EXTRACT=TXT" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\Samsung\\Desktop\\Emails FILE=Emails.csv" + "\n";
macro +=  "TAB CLOSE" + "\n";
for (var i=1;i<21;i++)
{

iimSet("i",i)
iimPlay(macro)
}
