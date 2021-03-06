///<reference path="types.ts" />

import express from "express";
import {
  createNotifications,
  updateNotificationById,
  getUnreadNotificationsByUserId
} from "./database";
import { ensureAuthenticated, validateMiddleware } from "./helpers";
import {
  isNotificationsBodyValidator,
  shortIdValidation,
  isNotificationPatchValidator
} from "./validators";
const router = express.Router();

// Routes

//GET /notifications/
router.get("/", ensureAuthenticated, (req, res) => {
  const notifications = getUnreadNotificationsByUserId(req.user?.id!);

  res.status(200);
  res.json({ notifications });
});

//POST /notifications/bulk
router.post(
  "/bulk",
  ensureAuthenticated,
  validateMiddleware([...isNotificationsBodyValidator]),
  (req, res) => {
    const { items } = req.body;

    const notifications = createNotifications(req.user?.id!, items);

    res.status(200);
    // @ts-ignore
    res.json({ notifications });
  }
);

//PATCH /notifications/:notificationId - scoped-user
router.patch(
  "/:notificationId",
  ensureAuthenticated,
  validateMiddleware([
    shortIdValidation("notificationId"),
    ...isNotificationPatchValidator
  ]),
  (req, res) => {
    const { notificationId } = req.params;

    updateNotificationById(req.user?.id!, notificationId, req.body);

    res.sendStatus(204);
  }
);

export default router;
