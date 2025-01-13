def domain_name(url):
    # Remove http:// or https:// if present
    url = url.replace("http://", "").replace("https://", "")
    
    # Remove www. if present
    url = url.replace("www.", "")
    
    # Get the domain name by taking everything before the first dot
    return url.split('.')[0]
print(domain_name("http://github.com/carbonfive/raygun"))  # -> "github"
print(domain_name("http://www.zombie-bites.com"))          # -> "zombie-bites"
print(domain_name("https://www.cnet.com"))                 # -> "cnet"


def domain_name(url):
    return re.search('(?:http[s]?://)?(?:www\.)?([\w-]+)\.', url).group(1)