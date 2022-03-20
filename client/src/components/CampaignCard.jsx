import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

export default function CampaignCard (props) {

  const {category} = props

  const data = useStaticQuery(graphql`
    query {
      content: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/${category}/" } }
        sort: { fields: [frontmatter___client], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              client
              coverImage
              heroImage
              subImage
              stats
            }
            html
          }
        }
      }
    }
  `);

  const campaigns = data.content.edges.filter(({ node }) => node);

  return (

    <>
      <div className="campaign-cards-container">

        {campaigns &&
          campaigns.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { client, coverImage, heroImage, subImage, stats } = frontmatter;

            

            return (

              <div className="campaign-card" id={client} onClick={}>
                <img src={coverImage} />
                <p className="comapign-card-title" id={`${client} title`}>{client}</p>
              </div>
            )
        })}
        
      </div>
    </>
  )
}