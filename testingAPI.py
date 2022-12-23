import requests

retrieveToken = "https://opentdb.com/api_token.php?command=request"

# send a get request to the API to retrieve a token
response = requests.get(retrieveToken)

# print the response
print(response.json())
