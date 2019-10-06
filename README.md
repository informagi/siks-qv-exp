# CORE-18 QV

## Assignment

Practical assignment for the Siks PhD course on Information Retrieval, 2019.

Outline:

+ Collecting query variants for Core-18
+ Run experiments using OSIRRC
+ Evaluate results in a Jupyter Notebook (discussed elsewhere)

This document focuses on collecting the Query Variants

## Using GoogleForms

### Clasp

Google Forms can be created from a Google Apps Script using the Forms service.
After converting the topics file to an XML format, multiple forms can be derived to
hand-out to the students.

You can develop Google Apps scripts locally using [`clasp`](https://github.com/google/clasp).

#### Install Clasp

Install `npm` and `Node.js` for Fedora:

    sudo dnf install nodejs
    sudo dnf install nodejs-yarn

See [fedora documentation](https://developer.fedoraproject.org/tech/languages/nodejs/modules.html) for installing modules.

_Note:_ maybe interesting later, `dnf module list nodejs`, for other versions of `npm`. 
Here, the _modules_ refers to Fedora modules, not `npm` modules.

Install `clasp`:

    nodejs-yarn add @google/clasp
    export PATH=`pwd`/node_modules/.bin:$PATH

    clasp login
    clasp create siks

I created a GCProject named _Siks QV Exp_ [here](https://console.cloud.google.com/cloud-resource-manager).
Not sure if really necessary, but `clasp apis list` seemed to need it.

Also follow: https://github.com/google/clasp/blob/master/docs/run.md









## Using XForms

### Install XSLTForms

Download the library:

```
wget -O xsltforms.zip https://sourceforge.net/projects/xsltforms/files/latest/download
mkdir xsltforms-1.3 ; cd xsltforms-1.3 ; unzip ../xsltforms.zip
```

### XSLT processing in Firefox

Open [about:config](about:config) and set `privacy.file_unique_origin` to `false`.

file:///home/arjen/RU/siks-qv-exp/topics.xhtml

_On web server not resolved! rure.cs.ru.nl/siks/topics.xhtml_

### Prepare data

```
cat header.txt topics.core18.txt footer.txt | xsltproc addvn.xsl - > data/topics.xml
```

### See also

https://www.xml.com/articles/2019/07/31/nophp-conference-website-xforms/

https://homepages.cwi.nl/~steven/xforms11-for-html-authors/
https://homepages.cwi.nl/~steven/xforms11-for-html-authors/part2.html


