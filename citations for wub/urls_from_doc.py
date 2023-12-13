import re
import sys
import time

# Check if an argument was passed to the script
if len(sys.argv) > 1:
    # Get the first argument
    doc = docx.Document(f'{sys.argv[1]}')
    print(doc)
else:
    print('No input parameter was provided.')
    exit(1)

# Open the document and read its contents
text = ''
for para in doc.paragraphs:
    text += para.text + '\n'

# Define a regular expression pattern to match URLs
url_pattern = r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'

# Find all URLs in the text using the regular expression pattern
urls = re.findall(url_pattern, text)

# Print the list of URLs
print(urls)
