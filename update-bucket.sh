#!/bin/bash
gsutil rsync -d -r src gs://${BUCKET_NAME}
