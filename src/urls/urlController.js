import { shorten as shortenUrl, getUrlByShortCode as getUrlByCode } from './urlService.js';

export const shorten = async (req, res) => {
  const { url } = req.body;
  const result = await shortenUrl(url);

  if (!result.success) {
    return res.status(500).json({ error: result.message });
  }

  return res.status(201).json(result);
};

export const getUrlByShortCode = async (req, res) => {
  const { shortCode } = req.params;
  const result = await getUrlByCode(shortCode);

  if (!result.success) {
    return res.status(404).json({ error: result.message });
  }

  return res.status(200).json(result);
};
