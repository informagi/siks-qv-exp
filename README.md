# Using XForms

## Install XSLTForms

Download the library:

```
wget -O xsltforms.zip https://sourceforge.net/projects/xsltforms/files/latest/download
mkdir xsltforms-1.3 ; cd xsltforms-1.3 ; unzip ../xsltforms.zip
```

## XSLT processing in Firefox

Open [about:config](about:config) and set `privacy.file_unique_origin` to `false`.

## Prepare data

```
cat header.txt topics.core18.txt footer.txt | xsltproc addvn.xsl - > data/topics.xml
```
