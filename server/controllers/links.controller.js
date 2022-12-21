import { Link } from "../model/links.model.js";

// GET- Get all links

export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({});

    if (links) {
      res.status(200).json({
        status: "OK",
        links,
      });
    }
  } catch (e) {
    // todo- check status codes
    res.status(400).json({
      message: "Couldn't fetch",
      error: e.message,
    });
  }
};

// GET- get specific link

export const getLinkById = async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);

    if (link) {
      res.status(200).json({
        status: "OK",
        link,
      });
    }
  } catch (e) {
    // todo- check status codes
    res.status(400).json({
      message: "Couldn't fetch",
      error: e.message,
    });
  }
};

// POST- Add links

export const addLink = async (req, res) => {
  // try {
  //   const { title, link, category, upVotes, tags, discussions } = req.body;

  //   const createLink = await Link.create({
  //     title,
  //     link,
  //     category,
  //     upVotes,
  //     tags,
  //     discussions,
  //   });

  //   console.log(createLink);

  //   if (createLink) {
  //     res.status(201).json({
  //       status: "ok",
  //       createLink,
  //     });
  //   } else {
  //     res.status(501).json({
  //       message: "Soemthing went wrong while creating",
  //     });
  //   }
  // } catch (error) {
  //   // todo- check status codes
  //   res.status(400).json({
  //     message: "something went wrong",
  //     error: e.message,
  //   });
  // }

  res.send("works");
};
