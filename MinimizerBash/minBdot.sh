#replace all comments with empty string
#/\/\.* is \\.* which is \\ followed by anything or nothing
#it is replaced with whatever is inbetween the last two slashes, which is nothing
#so comments get deleted
# $1 is the first input into the script - the input file
#then we pipe(|) that into tr which deletes (-d) all newlines (\n)
#then we output that into the output file
sed "s/\/\/.*//" $1/index.html | tr -d '\n ' > $1/out.min.html
wc -c $1/out.min.html