s/\([0-9]\),\n/\1,/
s/, \+/,/
s/\([0-9]\),\n/\1,/
s/, \+/,/
s/^  \+//
#grep "[0-9]" ${file.txt} > ${file.csv}
