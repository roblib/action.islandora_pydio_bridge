action.islandora
================

Islandora plugin for Pydio

Place in the directory in the usr/share/pydio/plugins directory. It may be necessary to delete plugins_cache.ser if you have it enabled in order to get the new plugin to show up (on CentOS this is in /var/cache/pydio; on Ubuntu it's /var/lib/pydio/data/cache). After installing, the new "Deposit Data" button displayed in the Pydio top bar and context menu may be labeled "not_found" -- in order to remedy this, you'll want to remove i18n/en_plugins_messages.ser from the same cache directory.