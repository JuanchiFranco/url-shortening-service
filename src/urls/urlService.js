import prisma from "../config/db.js";
import { generateShortCode } from "../utils/generateCodes.js";

export const shorten = async (url) => {
  const shortCode = generateShortCode();
  const shortUrl = await prisma.url.create({
    data: { url, shortCode },
  });

  if (!shortUrl) {
    return {
        success: false,
        message: "Failed to create short URL",
    };
  }

  return { success: true, message: "URL created", url: shortUrl };
};
