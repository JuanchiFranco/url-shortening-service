import { shorten as shortenUrl } from './urlService.js';

export const shorten = async (req, res) => {
  const { url } = req.body;
  const result = await shortenUrl(url);

  if (!result.success) {
    return res.status(500).json({ error: result.message });
  }

  return res.status(201).json(result);
};
