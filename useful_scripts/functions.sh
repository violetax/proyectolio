#convert newlines into commas
nl2c () { tr '\n' ',' | sed -e 's/,$//' ;}
