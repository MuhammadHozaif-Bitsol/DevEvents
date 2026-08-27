"use server";

import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();
  } catch {
    return [];
  }
};
// Add this below your existing getSimilarEventsBySlug function

export const getAllEvents = async () => {
  try {
    await connectDB();
    // Fetches all events, sorted by newest first.
    // .lean() helps convert MongoDB documents to plain JavaScript objects
    const events = await Event.find().sort({ createdAt: -1 }).lean();
    return events;
  } catch (error) {
    console.error("Error fetching all events:", error);
    return [];
  }
};

export const getEventBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug }).lean();
    return event;
  } catch (error) {
    console.error("Error fetching event by slug:", error);
    return null;
  }
};
