import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "./api/PostApi";

export default function View() {
  const [pageData, setPageData] = useState(false);
  let params = useParams();
  console.log(params);

  const getData = async () => {
    const res = await getSinglePost(params.id);

    setPageData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pageData);

  if (pageData) {
    return (
      <>
        <div>
          <div>
            <h2>{pageData.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </div>
      </>
    );
  } else return <>Loading</>;
}
