// DC EMAIL EXTRACTION SCRIPT - SAIF ALI
// SCRIPT MAY NOT BE EDITED NOR DISTRIBUTED WITHOUT THE PERMISSIONS OF SAIF ALI
var macro = "CODE:";
macro += "'EMAIL EXTRN SCRIPT - SAIF ALI" + "\n";
macro += "" + "\n";
macro += "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro += "SET !ERRORIGNORE YES" + "\n";
macro += "SET !ERRORCONTINUNE YES" + "\n";
macro += "SET !EXTRACT_TEST_POPUP NO" + "\n";
macro += "TAB T=1" + "\n";
macro += "URL GOTO=http://www.distributorcentral.com/supplier/maintenance.cfm" + "\n";
macro += "TAG POS=1 TYPE=SELECT FORM=ID:custSearch ATTR=NAME:as_field CONTENT=%st" + "\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:custSearch ATTR=ID:as_keyword CONTENT=New<SP>York" + "\n";
macro += "TAG POS=1 TYPE=BUTTON FORM=ID:custSearch ATTR=TYPE:submit&&CLASS:fv-hidden-submit&&TXT:" + "\n";
macro += "WAIT SECONDS=3" + "\n";
macro += "TAG POS=1 TYPE=SELECT FORM=ACTION:/supplier/maintenance.cfm?as_sort_by=a.companyname&as_field=st&as_keyword=New%20York&asd=15&as_distact=&as_supact=&haswebsites=&as_acctstatuscode=&as_acct_rep=&epath=&as_starts_with= ATTR=NAME:as_display CONTENT=%150" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS={{i}} TYPE=I ATTR=CLASS:fa<SP>fa-info-circle&&TITLE:View<SP>Info&&TXT:" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Contact<SP>Info" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=TD ATTR=TXT:Main:<SP>* EXTRACT=TXT" + "\n";
macro += "TAG POS=3 TYPE=A ATTR=TXT:*&&HREF:mailto:* EXTRACT=TXT" + "\n";
macro += "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\theki\\Documents\\iMacros\\Downloads\\ FILE=DCemail.csv" + "\n";
for(i=1;i<=150;i++){
iimSet("i",i);
iimPlay(macro);
}