# Array with expressions
#https://www.czso.cz/documents/10180/23173345/jmena2007en.pdf/5a0d951a-add3-4293-b54d-f61fe6753bca
expressions=("Jan" "Jakub" "Tomáš" "Martin" "Michal" "Lukáš" "David" "Dominik" "Petr" "Jiří" "Daniel" "Ondřej" "Marek" "Filip" "Vojtěch" "Pavel" "Matěj" "Patrik" "Adam" "Štěpán")

echo $expression

# Seed random generator
RANDOM=$$$(date +%s)

# Get random expression...
selectedexpression=${expressions[$RANDOM % ${#expressions[@]}]}
# Write to Shell
echo "The winner is:"
echo $selectedexpression
echo $selectedexpression > winner.txt