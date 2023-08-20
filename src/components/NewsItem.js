import React from "react";
import { styled } from "styled-components";

const NewsItemBlock = styled.div`
	display: flex;
	.thumbnail {
		margin-right: 1rem;
		img {
			display: block;
			width: 160px;
			height: 160px;
			object-fit: cover;
		}
	}
	.contents {
		p {
			margin: 0;
			font-style: italic;
		}
		h2 {
			margin: 0;
			a {
				color: black;
			}
		}
		p {
			margin: 0;
			line-height: 1.5;
			margin-top: 0.5rem;
			white-space: normal;
		}
	}
	& + & {
		margin-top: 3rem;
	}
`;

const NewsItem = ({ article }) => {
	const { title, description, url, urlToImage, publishedAt } = article;
	return (
		<NewsItemBlock>
			{urlToImage && (
				<div className="thumbnail">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt="thumbnail" />
					</a>
				</div>
			)}
			<div className="contents">
				<p>{publishedAt.slice(0, 10)}</p>
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				<p>{description}</p>
			</div>
		</NewsItemBlock>
	);
};

export default NewsItem;

// title, description, url, urlToImage,publishedAt
// "totalResults": 34,
//   "articles": [
//     {
//       "source": {
//         "id": null,
//         "name": "Ikbc.co.kr"
//       },
//       "author": "김재현",
//       "title": "고 노무현 전 대통령 명예훼손 정진석 의원 징역 6개월 선고 - KBC광주방송",
//       "description": "고(故) 노무현 전 대통령의 명예를 훼손한 혐의로 기소된 정진석 국민의힘 의원에게 징역형이 선고됐습니다.  서울중앙지법 형사5단독 박병곤 판사는",
//       "url": "http://www.ikbc.co.kr/article/view/kbc202308100042",
//       "urlToImage": "http://www.ikbc.co.kr/data/kbc/image/2023/08/10/kbc202308100066.jpg",
//       "publishedAt": "2023-08-10T06:06:06Z",
//       "content": ".., \r\n' '.. · \r\n'' .. \r\nSRT·, ''"
//     },
