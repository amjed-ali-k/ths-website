import Breadcrumbs from 'components/Breadcrumbs';

function gallery() {
  return (
    <div>
      <Breadcrumbs title="Gallery"></Breadcrumbs>
      <div className="rs-gallery-4 rs-gallery sec-spacer">
        <div className="container">
          <div className="sec-title-2 mb-50 text-center">
            <h2>GALLERY</h2>
            {/* <p>
              Considering primary motivation for the generation of narratives is a useful concept
            </p> */}
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://embedsocial.com/api/pro_hashtag/fa94dae9f618f5c95228a69edb2230367ab68b6a" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0"></iframe>`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default gallery;
