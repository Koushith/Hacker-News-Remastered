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

// PUT -Edit Link

export const editLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, link } = req.body;

    console.log({ title, category, link, id });

    const _link = await Link.findByIdAndUpdate(id, {
      title,
      category,
      link,
    });

    res.status(200).json({
      message: "success",
      _link,
    });
  } catch (e) {
    // todo- check status codes
    res.status(400).json({
      message: "something went wrong while editing",
      error: e.message,
    });
  }
};

// POST- Add links

export const addLink = async (req, res) => {
  try {
    const { title, link, category, upVotes, tags, discussions } = req.body;

    const createLink = await Link.create({
      title,
      link,
      category,
      upVotes,
      tags,
      discussions,
    });

    console.log(createLink);

    if (createLink) {
      res.status(201).json({
        status: "ok",
        createLink,
      });
    } else {
      res.status(501).json({
        message: "Soemthing went wrong while creating",
      });
    }
  } catch (error) {
    // todo- check status codes
    res.status(400).json({
      message: "something went wrong",
      error: e.message,
    });
  }
};

// DELETE

export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("idddd", id);

    const deletedLink = await Link.findByIdAndDelete(id);

    if (deletedLink) {
      res.status(200).json({
        message: "Link deteted successfully",
        deletedLink,
      });
    } else {
      // check status code later
      res.status(501).json({
        message: "Soemthing went wrong while deleting",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: e.message,
    });
  }
};
