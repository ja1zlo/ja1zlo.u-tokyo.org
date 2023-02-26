#!/usr/bin/perl

print "Content-type: text/plain\n\n";
print `perl -v`;
#print `perl -V`;
#print `find \`perl -e 'print "@INC"'\` -name '*.pm' -print`;

print `whereis perl`;

print `whereis php`;
#print `which php`;
#which: no php in (/sbin:/usr/sbin:/bin:/usr/bin)
print `php -v`;
print `whereis php5`;

print `whereis python`;
#print `whereis pypy`;
#print `python -V`;
#print `python -m django --version`;
#>/usr/bin/python: No module named django
print `whereis ruby`;
print `whereis java`;
print `/usr/share/java -version`;
print `ls /usr/share/java`;

#print `mysql --version`;
#print `psql --version`;
#print `sqlite3 --version`;

print `httpd -v`;
print `httpd -M`;

print `id`;
print `uname -a`;
print `cat /etc/issue`;
print `date`;
print `pwd`;
#print `crontab -l`;
#>no crontab for apache
print `sed --version`;
print `git --version`;
print `df -h`;

print `tail /home/ja1zlo/log/error.log`;

exit;
