#!/usr/bin/env python
# python-gtk-webkit presentation program.
# Copyright (C) 2009 by Akkana Peck.
# Share and enjoy under the GPL v2 or later.

import sys
import gobject
import gtk
import webkit

class WebBrowser(gtk.Window):
    def __init__(self, url):
        gtk.Window.__init__(self)
        # self.fullscreen()
        self.set_title('testBrowser');
        self.set_default_size(800,600);

        self._browser= webkit.WebView()
        self.add(self._browser)
        self.connect('destroy', gtk.main_quit)

        self._browser.open(url)
        self.show_all()

if __name__ == "__main__":
    if len(sys.argv) <= 1 :
        print "Usage:", sys.argv[0], "url"
        sys.exit(0)

    gobject.threads_init()
    webbrowser = WebBrowser(sys.argv[1])
    gtk.main()
