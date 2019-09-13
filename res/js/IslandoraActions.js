/**
 * Created by ppound on 2017-08-30.
 */


(function (global) {

  class Callbacks {

    static exportObject() {
      var selection = pydio.getUserSelection().getSelectedNodes()[0];
      var repositoryId = encodeURIComponent(pydio.user.activeRepository);
      var metadata = selection.getMetadata();
      // Islandora wants to know if we are uploading a directory but pydio only tells us if it is a file or not
      // so if its not a file we assume its a directory
      var isDirectory = Boolean(metadata.get('is_file'));
      isDirectory = !isDirectory.toString();
      var fileName = encodeURIComponent(selection.getPath());
      var token = encodeURIComponent(pydio.Parameters.get("SECURE_TOKEN"));
      // TODO find a better method to add the path parameters
      var path = '/islandora_pydio_bridge/ingest?is_dir=' +isDirectory+'&repo_id=' +repositoryId+'&download_base_url=%2Fpydio7%2Findex.php&download_query_params=get_action%3Ddownload%26secure_token%3D'+token
        +'%26file%3D'+fileName;
      window.location.replace(path);
    }
    static backToDrupal() {
      var path = '/my-account';
      window.location.replace(path);
    }
  }

    global.IslandoraActions = {
      Callbacks: Callbacks,
    };

  })(window)
