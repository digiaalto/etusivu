import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "50rdoz7h",
  dataset: "production",
  useCdn: true,
})
