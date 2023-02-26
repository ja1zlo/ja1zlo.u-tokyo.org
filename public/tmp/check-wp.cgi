#!/usr/bin/perl

print "Content-Type: text/html\n\n";
#print "AA";

#print `python /home/ja1zlo/public_html/tmp/wp.cgi`;
print `python -c "help('modules')"`;
#print `python -c 'import pydoc, sys; pydoc.ModuleScanner().run(lambda *x: sys.stdout.write(x[1] + "\n"))'`;
#print `python -c 'import sys; print sys.version_info'`;
#print `python -c 'import urllib, sys; print dir(urllib)'`;
#print `python -c 'import urllib2, sys, cgitb; cgitb.enable(); dir(urllib2)'`;
#print `python --version`;
#print `ps aux|grep cgi`;

exit;
