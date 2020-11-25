import { Request, Response } from 'express';

function postLink(req: Request, res: Response) {
  res.send('postlink');
}

function getLink(req: Request, res: Response) {
  res.send('getlink');
}

function hitLink(req: Request, res: Response) {
  res.send('hitlink');
}

export default { postLink, getLink, hitLink };
